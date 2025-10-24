import React, { useEffect, useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import RoleTable from "../components/RoleTable";
import RoleForm from "../components/RoleForm";
import { Role } from "../models/Role";
import { getRoles, createRole, updateRole, deleteRole } from "../api/roleApi";

const AdminDashboard: React.FC = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [editingRole, setEditingRole] = useState<Role | null>(null);

  const loadRoles = async () => {
    const data = await getRoles();
    setRoles(data);
  };

  useEffect(() => {
    loadRoles();
  }, []);

  const handleSave = async (role: {  id: string; name: string; }) => {
    if (editingRole) {
      await updateRole(editingRole.id, role);
      setEditingRole(null);
    } else {
      await createRole(role);
    }
    loadRoles();
  };

  const handleDelete = async (id: string) => {
    await deleteRole(id);
    loadRoles();
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 2 }}>Admin Role Management</Typography>
      <Box sx={{ mb: 3 }}>
        <RoleForm onSave={handleSave} editingRole={editingRole} />
      </Box>
      <RoleTable roles={roles} onEdit={setEditingRole} onDelete={handleDelete} />
    </Container>
  );
};

export default AdminDashboard;
