"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, } from "@mui/material";
import ImageComponent from "@/app/utils/ImageComponent/ImageCompontent";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function OrderedProducts({ cartProducts }: any) {
    
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleOpen}
        className="flex gap-1 items-center bg-green-700 text-white rounded-full p-1 px-2 "
      >
        View
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="overflow-auto h-5/6">
          {cartProducts.map((item:any) => {
            
            return (
              <div key={item._id} className="p-2 mb-2 flex items-center gap-3 border border-solid ">
                <div className="w-32 p-3 lg:w-32 ">
                  <ImageComponent photo={item.productId.image} />
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <div className="relative lg:w-60">
                      <p className="text-sm md:text-lg lg:text-xl pr-2 ">
                        {item.productId.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg md:text-lg lg:text-2xl">Rs. {item.productId.price}</p>
                </div>
              </div>
            );
          })}
        </Box>
      </Modal>
    </div>
  );
}
