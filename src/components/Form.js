// src/components/Form.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/system";
import {
  Typography,
  Container,
  TextField,
  Button,
  List,
  ListItem as MUIListItem,
} from "@mui/material";

const FormContainer = styled(Container)({
  textAlign: "center",
  paddingTop: (theme) => theme.spacing(4),
  paddingBottom: (theme) => theme.spacing(4),
  fontFamily: "'Roboto', sans-serif",
});

const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: (theme) => theme.spacing(2),
});

const ListItemContainer = styled(MUIListItem)({
  border: "1px solid #e0e0e0",
  borderRadius: "12px",
  marginBottom: (theme) => theme.spacing(2),
  padding: (theme) => theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  margin: "8px 0px",
  alignItems: "flex-start",
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.02)",
    backgroundColor: "#f5f5f5",
  },
});

const ListItemTitle = styled(Typography)({
  fontSize: "1.5rem",
  marginBottom: "8px",
});

const ListItemDescription = styled(Typography)({
  fontSize: "1rem",
  color: "#000000de",
});

const AddItemButton = styled(Button)({
  marginTop: (theme) => theme.spacing(3),
  backgroundColor: "#4caf50",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#45a049",
  },
});

const FormComponent = () => {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get(`https://mern-backend-e8d4.onrender.com/api/items`)
      .then((response) => setItems(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleAddItem = () => {
    axios
      .post("https://mern-backend-e8d4.onrender.com/api/items", { title, description })
      .then((response) => {
        setItems([...items, response.data]);
        setTitle("");
        setDescription("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <FormContainer >
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddItem();
        }}
      >
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          margin="normal"
        />

        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          margin="normal"
        />

        <AddItemButton type="submit" variant="contained">
          Add Item
        </AddItemButton>
      </Form>

      <List>
        {items.map((item) => (
          <ListItemContainer key={item._id}>
            <ListItemTitle>{item.title}</ListItemTitle>
            <ListItemDescription>{item.description}</ListItemDescription>
          </ListItemContainer>
        ))}
      </List>
    </FormContainer>
  );
};

export default FormComponent;
