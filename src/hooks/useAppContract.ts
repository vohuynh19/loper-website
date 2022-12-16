import { useConnection, useAnchorWallet } from "@solana/wallet-adapter-react";
import * as anchor from "@project-serum/anchor";
import { useEffect, useState } from "react";
import idl from "~/src/configs/funding_block.json";

const PROGRAM_ID = new anchor.web3.PublicKey(
  `9RgWo49pJ9pD24QkBMFTJ1J6RQdHbLoTa4J65V3n8eKm`
);
const programWallet = new anchor.web3.PublicKey(
  "DTijKdweRy1GNVAGp8ZFvt15qqytd29wDPNndPQ1yJiY"
);
const mint = new anchor.web3.PublicKey(
  "prjctRCEC7Pu5ryxvpW7Z5EfdbJN7puFfMcXdgheRGc"
);

export const useAppContract = () => {
  const [program, setProgram] = useState<anchor.Program>();

  const { connection } = useConnection();
  const wallet = useAnchorWallet();

  useEffect(() => {
    if (wallet) {
      let provider: anchor.Provider;
      try {
        provider = anchor.getProvider();
      } catch {
        provider = new anchor.AnchorProvider(connection, wallet, {});
        anchor.setProvider(provider);
      }

      const program = new anchor.Program(
        idl as unknown as anchor.Idl,
        PROGRAM_ID
      );
      setProgram(program);
    }
  }, [wallet, connection]);

  const createQuest = async (callback: (tx: string) => void) => {
    if (!wallet || !program) {
      return;
    }
    const questAccount = anchor.web3.Keypair.generate();
    const [funderState, bump] = await anchor.web3.PublicKey.findProgramAddress(
      [
        Buffer.from("funder_state"),
        wallet.publicKey.toBuffer(),
        questAccount.publicKey.toBuffer(),
      ],
      PROGRAM_ID
    );

    const programWalletToken = await anchor.utils.token.associatedAddress({
      mint: mint,
      owner: programWallet,
    });
    const userToken = await anchor.utils.token.associatedAddress({
      mint: mint,
      owner: wallet.publicKey,
    });
    const tx = await program.methods
      .createQuest("cuc cut", new anchor.BN("1"), new anchor.BN("1671123600"))
      .accounts({
        questAccount: questAccount.publicKey,
        funderState: funderState,
        programWallet: programWalletToken,
        user: wallet.publicKey,
        userToken,
        mint: mint,
        systemProgram: anchor.web3.SystemProgram.programId,
        tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
        associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
        rent: anchor.web3.SYSVAR_RENT_PUBKEY,
      })
      .signers([questAccount])
      .rpc();
    callback(tx);
  };

  return { createQuest };
};
