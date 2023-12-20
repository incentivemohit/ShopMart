import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <>
      <div className="bg-black text-white mt-2 pt-3">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 p-4">
          <div className="flex flex-col gap-3 pr-2">
            <p className="text-3xl" style={{ fontFamily: "Pacifico ,cursive" }}>
              ShopMart
            </p>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              debitis nulla cupiditate maxime quod, odio rerum incidunt! Quo,
              temporibus corrupti.
            </p>
            <div>
              <p>(+800)1234 5678 90</p>
              <p>info@company.com</p>
            </div>

            <ul className="flex gap-4">
              <li>
                <TwitterIcon />
              </li>
              <li>
                <FacebookIcon />
              </li>
              <li>
                <YouTubeIcon />
              </li>
              <li>
                <GitHubIcon />
              </li>
            </ul>
          </div>
          <div>
            <div className="flex flex-col gap-4 md:grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="border-b-2 border-red-700 text-xl">
                  Information
                </h4>

                <ul className="mt-1">
                  <li className="text-sm cursor-pointer hover:text-gray-300">
                    About us
                  </li>
                  <li className="text-sm cursor-pointer hover:text-gray-300">
                    Delivery information
                  </li>
                  <li className="text-sm cursor-pointer hover:text-gray-300">
                    Privacy Policy
                  </li>
                  <li className="text-sm cursor-pointer hover:text-gray-300">
                    Terms & Conditions
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="border-b-2 border-red-700 text-xl">
                  Customer Service
                </h4>

                <ul className="mt-1">
                  <li className="text-sm cursor-pointer hover:text-gray-300">
                    Contact us
                  </li>
                  <li className="text-sm cursor-pointer hover:text-gray-300">
                    Sitemap
                  </li>
                  <li className="text-sm cursor-pointer hover:text-gray-300">
                    Brands
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="border-b-2 border-red-700 text-xl">
                  My Account
                </h4>

                <ul className="mt-1">
                  <li className="text-sm cursor-pointer hover:text-gray-300">
                    My account
                  </li>
                  <li className="text-sm cursor-pointer hover:text-gray-300">
                    Order History
                  </li>
                  <li className="text-sm cursor-pointer hover:text-gray-300">
                    Wish List
                  </li>
                  <li className="text-sm cursor-pointer hover:text-gray-300">
                    Newsletter
                  </li>
                  <li className="text-sm cursor-pointer hover:text-gray-300">
                    Returns
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center p-1 bg-white text-black mt-1">
          &copy;&nbsp;2023-2032 and Developed By Mohit Kumar
        </p>
      </div>
    </>
  );
}

export default Footer;
