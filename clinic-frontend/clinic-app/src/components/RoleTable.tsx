import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from "@mui/material";
import { Role } from "../models/Role";

interface Props {
  roles: Role[];
  onEdit: (role: Role) => void;
  onDelete: (id: string) => void;
}

const RoleTable: React.FC<Props> = ({ roles, onEdit, onDelete }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {roles.map((role) => (
          <TableRow key={role.id}>
            <TableCell>{role.id}</TableCell>
            <TableCell>{role.name}</TableCell>
            <TableCell>
              <Button color="primary" onClick={() => onEdit(role)}>Edit</Button>
              <Button color="error" onClick={() => onDelete(role.id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RoleTable;
