/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Note } from "../models";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function NoteUI(props) {
  const { note, overrides, ...rest } = props;
  const buttonThreeSevenFourEightTwoSevenFourSixOnClick =
    useDataStoreDeleteAction({ model: Note, id: note?.id, schema: schema });
  return (
    <Flex
      gap="0"
      direction="column"
      width="480px"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NoteUI")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="480px"
        height="366px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="24px 24px 24px 24px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Container")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="401px"
          height="220px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Content")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="800"
            color="rgba(0,0,0,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={note?.title}
            {...getOverrideProps(overrides, "Title")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={note?.text}
            {...getOverrideProps(overrides, "Paragraph")}
          ></Text>
          <Button
            width="122px"
            height="unset"
            gap="24px"
            shrink="0"
            size="large"
            isDisabled={false}
            variation="default"
            children="Delete"
            onClick={() => {
              buttonThreeSevenFourEightTwoSevenFourSixOnClick();
            }}
            {...getOverrideProps(overrides, "Button37482746")}
          ></Button>
          <Button
            width="74px"
            height="unset"
            gap="24px"
            shrink="0"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Edit"
            {...getOverrideProps(overrides, "Button37482750")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
