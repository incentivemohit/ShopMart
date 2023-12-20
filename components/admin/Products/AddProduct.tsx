"use client";
import React, { useState } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddProduct() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <button
        onClick={handleOpen}
        className="flex gap-1 items-center bg-green-700 text-white rounded-full p-1 px-2 "
      >
        <AddCircleOutlineOutlinedIcon />
        Add Product
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col gap-2">
            <p className="text-2xl">Add New Product</p>

            <TextField
              id="outlined-basic"
              placeholder="Product Title"
              variant="outlined"
              size="small"
            />
            <TextField
              id="outlined-basic"
              placeholder="Description"
              variant="outlined"
              size="small"
              multiline
              rows={3}
            />

            <TextField
              type="file"
              id="outlined-basic"
              placeholder="Category"
              variant="outlined"
              size="small"
            />
            <TextField
              id="outlined-basic"
              placeholder="Category"
              variant="outlined"
              size="small"
            />

            <div className="flex items-center gap-2">
              <TextField
                id="outlined-basic"
                placeholder="Price"
                variant="outlined"
                size="small"
              />

              <TextField
                id="outlined-basic"
                placeholder="Stock"
                variant="outlined"
                size="small"
              />
            </div>
          </div>
          <div className="pt-2 flex justify-between items-center">
            <button className="bg-gray-300 px-2 py-1 rounded-full">
              Save draft
            </button>
            <button className="bg-gray-300 px-3 py-1 rounded-full">
              Add Product
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
