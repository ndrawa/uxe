import React from "react";
import { BiHome, BiPlus } from "react-icons/bi";
import { CgTrack } from "react-icons/cg";
import NavItem from "./NavItem";
import { FiSend } from "react-icons/fi";
import { RiTruckLine } from "react-icons/ri";
import { MdOutlineHealthAndSafety, MdOutlineHealing } from "react-icons/md";

export default function Navbar(props) {
  return (
    <>
      <div className="py-2.5 px-12 text-gray-500 absolute container bg-gray-100 inset-x-0 bottom-0 flex justify-between">
        {(() => {
          switch (props.role) {
            case 0:
              return (
                <>
                  <NavItem rute="/">
                    <BiHome className="w-6 h-6" />
                    <p className="text-xs pt-1">Home</p>
                  </NavItem>
                  <NavItem rute="/user">
                    <BiPlus className="w-6 h-6" />
                    <p className="text-xs pt-1">Add</p>
                  </NavItem>
                  <NavItem rute="/tracking">
                    <CgTrack className="w-6 h-6" />
                    <p className="text-xs pt-1">Tracking</p>
                  </NavItem>
                </>
              );
            case 1:
              return (
                <>
                  <NavItem rute="/">
                    <BiHome className="w-6 h-6" />
                    <p className="text-xs pt-1">Home</p>
                  </NavItem>
                  <NavItem rute="/producer">
                    <FiSend className="w-6 h-6" />
                    <p className="text-xs pt-1">Transaksi</p>
                  </NavItem>
                  <NavItem rute="/tracking">
                    <CgTrack className="w-6 h-6" />
                    <p className="text-xs pt-1">Tracking</p>
                  </NavItem>
                </>
              );
            case 2:
              return (
                <>
                  <NavItem rute="/">
                    <BiHome className="w-6 h-6" />
                    <p className="text-xs pt-1">Home</p>
                  </NavItem>
                  <NavItem rute="/distributor">
                    <RiTruckLine className="w-6 h-6" />
                    <p className="text-xs pt-1">Distribution</p>
                  </NavItem>
                  <NavItem rute="/tracking">
                    <CgTrack className="w-6 h-6" />
                    <p className="text-xs pt-1">Tracking</p>
                  </NavItem>
                </>
              );
            case 3:
              return (
                <>
                  <NavItem rute="/">
                    <BiHome className="w-6 h-6" />
                    <p className="text-xs pt-1">Home</p>
                  </NavItem>
                  <NavItem rute="/doctor">
                    <MdOutlineHealthAndSafety className="w-6 h-6" />
                    <p className="text-xs pt-1">Vaccinator</p>
                  </NavItem>
                  <NavItem rute="/tracking">
                    <CgTrack className="w-6 h-6" />
                    <p className="text-xs pt-1">Tracking</p>
                  </NavItem>
                </>
              );
            case 4:
              return (
                <>
                  <div className="pl-12 relative flex justify-between">
                    <NavItem rute="/">
                      <BiHome className="w-6 h-6" />
                      <p className="text-xs pt-1">Home</p>
                    </NavItem>
                  </div>
                  <div className="pr-12 relative flex justify-between">
                    <NavItem rute="/patient">
                      <MdOutlineHealing className="w-6 h-6" />
                      <p className="text-xs pt-1">Vaccines</p>
                    </NavItem>
                  </div>
                </>
              );
            default:
              break;
          }
        })()}
      </div>
    </>
  );
}
