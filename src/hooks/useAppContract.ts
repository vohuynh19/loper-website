import { useConnection, useAnchorWallet } from "@solana/wallet-adapter-react";
import * as anchor from "@project-serum/anchor";
import { useEffect, useState } from "react";

import idl from "~/src/configs/funding_block.json";
import {
  CreateQuestParams,
  CreateSolutionParams,
  VoteParams,
} from "@src/apis/types";

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

  const createQuest = async (data: CreateQuestParams) => {
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

    return Promise.all([
      await program.methods
        .createQuest(
          data.title,
          new anchor.BN(data.fund.toString()),
          new anchor.BN(data.timeEnd.toString())
        )
        .accounts({
          questAccount: questAccount.publicKey,
          funderState: funderState,
          programWallet: programWalletToken,
          user: wallet.publicKey,
          userToken,
          systemProgram: anchor.web3.SystemProgram.programId,
          tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
          associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
          rent: anchor.web3.SYSVAR_RENT_PUBKEY,
        })
        .signers([questAccount])
        .rpc(),
      questAccount.publicKey,
    ]);
  };

  const createComment = async (data: CreateSolutionParams) => {
    if (!wallet || !program) {
      return;
    }

    const questAccount = new anchor.web3.PublicKey(data.questAddress);

    const [solutionAccount, bump] =
      await anchor.web3.PublicKey.findProgramAddress(
        [
          Buffer.from("solution_account"),
          wallet.publicKey.toBuffer(),
          questAccount.toBuffer(),
        ],
        PROGRAM_ID
      );

    return Promise.all([
      await program.methods
        .createSolution(data.content || "", data.imageLink || "")
        .accounts({
          questAccount: questAccount,
          solutionAccount: solutionAccount,
          user: wallet.publicKey,
          systemProgram: anchor.web3.SystemProgram.programId,
        })
        .signers([])
        .rpc(),
      questAccount,
    ]);
  };

  const vote = async (data: VoteParams) => {
    if (!wallet || !program) {
      return;
    }

    const questAccount = new anchor.web3.PublicKey(data.questAddress);
    const [solutionAccount, bumpSolution] =
      await anchor.web3.PublicKey.findProgramAddress(
        [
          Buffer.from("solution_account"),
          wallet.publicKey.toBuffer(),
          questAccount.toBuffer(),
        ],
        PROGRAM_ID
      );
    const [funderState, bump] = await anchor.web3.PublicKey.findProgramAddress(
      [
        Buffer.from("funder_state"),
        wallet.publicKey.toBuffer(),
        questAccount.toBuffer(),
      ],
      PROGRAM_ID
    );

    return await program.methods
      .vote()
      .accounts({
        questAccount,
        funderState,
        solutionAccount: solutionAccount,
        user: wallet.publicKey,
      })
      .signers([])
      .rpc();
  };

  return { createQuest, createComment, vote };
};
