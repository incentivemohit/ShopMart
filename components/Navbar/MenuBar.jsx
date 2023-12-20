
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MenuIcon from "@mui/icons-material/Menu";
import TwitterIcon from "@mui/icons-material/Twitter";
import {Link} from 'react-router-dom'
import Sidebar from "../Sidebar/Sidebar";

export default function MenuBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <div className="md:hidden">  <Button onClick={onOpen}>
        <MenuIcon />
      </Button>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" className="flex justify-between items-center">ShopMart <p onClick={onClose}>&#10060;</p></DrawerHeader>
          <DrawerBody>
            <div className="flex flex-col gap-2 ">
              <Link
                to="/"
                className="hover:bg-black hover:text-white py-2 pl-2"
              >
                Home
              </Link>
              <Link
                to="/"
                className="hover:bg-black hover:text-white py-2 pl-2"
              >
                About
              </Link>
              <Link
                to="/"
                className="hover:bg-black hover:text-white py-2 pl-2"
              >
                Promotions
              </Link>
              <Link
                to="/"
                className="hover:bg-black hover:text-white py-2 pl-2"
              >
                Blog
              </Link>
              <Link
                to="/"
                className="hover:bg-black hover:text-white py-2 pl-2"
              >
                Contact
              </Link>
            </div>
            <div>
            <Sidebar/>
            </div>
          
          </DrawerBody>
          <DrawerHeader borderTopWidth="1px">
            <span>Our Social Links</span>
            <div className="flex gap-3">
              <FacebookOutlinedIcon />
              <InstagramIcon />
              <PinterestIcon />
              <TwitterIcon />
            </div>
          </DrawerHeader>
        </DrawerContent>
      </Drawer></div>
    </>
  );
}
