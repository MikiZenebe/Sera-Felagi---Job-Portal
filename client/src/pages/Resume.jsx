import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  userEducations,
  userPortfolio,
  userProfileAction,
  userSkills,
} from "../redux/actions/userAction";
import { Education } from "../components/index";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";

export default function Cv() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(userProfileAction(id));
      dispatch(userEducations(id));
      dispatch(userPortfolio(id));
      dispatch(userSkills(id));
    }
  }, [dispatch, id]);

  const { userPro } = useSelector((state) => state.userProfileReducer);
  const { address } = useSelector((state) => state.userAddressReducer);

  return (
    <div>
      <h1 className="mt-10 text-center text-4xl">Profile</h1>
      <div className="my-14 p-10 flex flex-col gap-4">
        <div>
          <div>
            {userPro && userPro[0] && (
              <>
                <h2>{userPro[0].name?.toUpperCase()}</h2>
                <p>{userPro[0]?.email}</p>
                <p> +91 {address && address[0] && address[0].mobile_no}</p>
                <p>{address && address[0] && address[0].location}</p>
              </>
            )}
          </div>
        </div>
        <Divider />

        <Flex className="cursor-pointer flex flex-col gap-3">
          <Box>
            <Text className="text-2xl font-bold">Education Details</Text>
          </Box>

          <div>
            <Education />
          </div>
        </Flex>

        <hr />

        {/* <div className="cursor-pointer hover:bg-orange-300 p-4 hover:text-white hover:font-semibold flex flex-col gap-3">
          <div>
            <h4 className="text-2xl font-bold">Skills Details</h4>
          </div>

          <div>
            <Skillscompoent />
          </div>
        </div> */}

        <hr />

        {/* <div className="cursor-pointer hover:bg-orange-300 p-4 hover:text-white hover:font-semibold flex flex-col gap-3">
          <div>
            <h4 className="text-2xl font-bold">PERSONAL PROJECTS</h4>
          </div>

          <div>
            <Project />
          </div>
        </div> */}
        <hr />

        {/* <div className="cursor-pointer hover:bg-orange-300 p-4 hover:text-white hover:font-semibold flex flex-col gap-3">
          <div>
            <h4 className="text-2xl font-bold">PORTFOLIO</h4>
          </div>

          <div>
            <Portfolio />
          </div>
        </div> */}
      </div>
    </div>
  );
}
