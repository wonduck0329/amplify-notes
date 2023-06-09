import {
  UpdateNote,
  CreateNote,
  NavBar,
  NoteUICollection,
} from "./ui-components";
import { useState } from "react";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";

function App({ signOut }) {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateNote, setUpdateNote] = useState();

  return (
    <>
      <NavBar
        width="100%"
        marginBottom="20px"
        overrides={{
          Dashboard: {
            onClick: () => setShowCreateModal(true),
          },
          Jobs: {
            onClick: async () => {
              signOut();
              await DataStore.clear();
            },
          },
        }}
      />
      <div className="container">
        <NoteUICollection
          overrideItems={({ item, idx }) => {
            return {
              overrides: {
                Button37482750: {
                  as: "button",
                  onClick: () => {
                    setShowUpdateModal(true);
                    setUpdateNote(item);
                  },
                },
              },
            };
          }}
        />
      </div>
      <div className="modal" style={{ display: !showCreateModal && "none" }}>
        <CreateNote
          overrides={{
            Icon: { as: "button", onClick: () => setShowCreateModal(false) },
          }}
        />
      </div>
      <div className="modal" style={{ display: !showUpdateModal && "none" }}>
        <UpdateNote
          note={updateNote}
          overrides={{
            Icon: { as: "button", onClick: () => setShowUpdateModal(false) },
          }}
        />
      </div>
    </>
  );
}

export default withAuthenticator(App);
