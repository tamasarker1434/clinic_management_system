import React, { useEffect, useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { Role } from "../models/Role";
import { v4 as uuidv4 } from 'uuid';

interface Props {
  onSave: (role: { id: string; name: string; }) => void;
  editingRole: Role | null;
}

const RoleForm: React.FC<Props> = ({ onSave, editingRole }) => {
  const [name, setName] = useState("");
  const [id, setID] = useState("");

  useEffect(() => {
    if (editingRole) {
      setName(editingRole.name);
      setID(editingRole.id || "");
    }
  }, [editingRole]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let id = uuidv4();
    onSave({id, name });
    setName("");
    setID("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", gap: 2 }}>
      <TextField label="Role Name" value={name} onChange={(e) => setName(e.target.value)} required />
    
      <Button type="submit" variant="contained" color="primary">
        {editingRole ? "Update" : "Add Role"}
      </Button>
    </Box>
  );
};

export default RoleForm;
