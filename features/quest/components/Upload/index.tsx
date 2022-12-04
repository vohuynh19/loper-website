import { Upload as AUpload } from "antd";
import styled from "styled-components";

import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { FC } from "react";

type Props = {
  isLoading?: boolean;
};
const Upload: FC<Props> = ({ isLoading = false }) => {
  return (
    <AUpload>
      <Wrapper>
        {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </Wrapper>
    </AUpload>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightPrimary};
  border: 1px dashed ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spaces.lg};
  cursor: pointer;
`;

export default Upload;
