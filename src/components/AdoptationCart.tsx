import { Button, Drawer, Indicator } from "@mantine/core";
import { IconPawFilled } from "@tabler/icons-react";
import { useAdoptation } from "../context/AdoptationContext";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import CartItem from "./CartItem";

const AdoptationCart = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { cartQuantity } = useAdoptation();
  const [, setMessage] = useState("You have not rescued a doggo yet 😞");

  return (
    <div>
      <Drawer
        opened={opened}
        position="right"
        onClose={() => {
          close();
          setMessage("You have not rescued a doggo yet 😞");
        }}
        overlayProps={{ backgroundOpacity: 0.8 }}
      >
        <div>
          <CartItem />
        </div>
      </Drawer>
      <Button
        className="pb-2 self-center "
        variant="transparent"
        onClick={open}
      >
        <IconPawFilled
          size={35}
          className="text-white h-[25px] items-center lg:h-[35px]"
        />
        <div className="absolute bottom-0 left-5 top-[33%]">
          {cartQuantity > 0 ? (
            <Indicator
              inline
              position="bottom-start"
              zIndex={0}
              color="red"
              size={22}
            >
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                  fontSize: 14,
                  color: "white",
                }}
              >
                {cartQuantity}
              </span>
            </Indicator>
          ) : null}
        </div>
      </Button>
    </div>
  );
};

export default AdoptationCart;
