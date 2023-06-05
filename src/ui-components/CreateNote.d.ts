/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, IconProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateNoteOverridesProps = {
    CreateNote?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Create Note"?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField37482817?: PrimitiveOverrideProps<TextFieldProps>;
    TextField37482818?: PrimitiveOverrideProps<TextFieldProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CreateNoteProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CreateNoteOverridesProps | undefined | null;
}>;
export default function CreateNote(props: CreateNoteProps): React.ReactElement;
