/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Note } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoteUIOverridesProps = {
    NoteUI?: PrimitiveOverrideProps<FlexProps>;
    Container?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Paragraph?: PrimitiveOverrideProps<TextProps>;
    Button37482746?: PrimitiveOverrideProps<ButtonProps>;
    Button37482750?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NoteUIProps = React.PropsWithChildren<Partial<FlexProps> & {
    note?: Note;
} & {
    overrides?: NoteUIOverridesProps | undefined | null;
}>;
export default function NoteUI(props: NoteUIProps): React.ReactElement;
