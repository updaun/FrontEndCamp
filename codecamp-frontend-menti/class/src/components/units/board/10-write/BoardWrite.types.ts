import { ChangeEvent, MouseEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IMyvariables {
  number: number;
  writer?: string;
  title?: string;
  contents?: string;
}

export interface IBoradWriteUIProps {
  isEdit: boolean;
  data: any;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
}
