import { Button, Drawer, Indicator } from "@mantine/core";
import { IconPawFilled } from "@tabler/icons-react";
import { useAdoptation } from "../../context/AdoptationContext";
import { useDisclosure } from "@mantine/hooks";
import CartItem from "./CartItem";

const AdoptationCart = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { cartQuantity } = useAdoptation();

  return (
    <>
      <Drawer
        opened={opened}
        position="right"
        onClose={close}
        overlayProps={{ backgroundOpacity: 0.8 }}
      >
        <CartItem />
      </Drawer>
      <Button
        className="pb-2 items-center"
        variant="transparent"
        onClick={open}
      >
        <IconPawFilled
          size={35}
          className="text-white h-[30px] lg:h-[35px] items-center"
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
    </>
  );
};

export default AdoptationCart;
