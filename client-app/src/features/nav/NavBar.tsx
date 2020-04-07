import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

interface IProps {
  handleOpenCreateForm: () => void;
}

export const NavBar: React.FC<IProps> = ({ handleOpenCreateForm }) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button
            positive
            content="Create Activity"
            onClick={() => handleOpenCreateForm()}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};
