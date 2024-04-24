import { Button, Divider, Image } from "@mantine/core";
import { IconMinus } from "@tabler/icons-react";
import { useAdoptation } from "../context/AdoptationContext";
import { useState } from "react";

const CartItem = () => {
  const { cartQuantity, getCartItems, removeFromCart, clearCart } =
    useAdoptation();
  const cartItems = getCartItems();
  const [message, setMessage] = useState("You have not rescued a doggo yet 😞");

  return (
    <div>
      <h1 className="font-bold text-2xl mb-1">Your doggos: </h1>
      <Divider />
      <div className="mb-5">
        {cartQuantity > 0 ? (
          <div className="mt-5 grid gap-5">
            {cartItems.map((item, index) => {
              const formatBreedName = item.pet.message.split("/")[4];
              const breedName = formatBreedName
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
              return (
                <>
                  <div className="flex justify-between items-end" key={index}>
                    <div>
                      <div className="flex gap-5 items-center">
                        <Image
                          className="min-w-[120px] rounded-lg"
                          src={item.pet.message}
                          style={{
                            objectFit: "cover",
                            width: "120px",
                            height: "100px",
                          }}
                        />

                        <p className="font-bold">{breedName}</p>
                      </div>
                    </div>{" "}
                    <div className="my-auto">
                      <Button
                        className="w-[45px]"
                        onClick={() => removeFromCart(item.index)}
                        variant="filled"
                        color="red"
                        size="xs"
                        radius="lg"
                      >
                        <IconMinus />
                      </Button>
                    </div>
                  </div>
                </>
              );
            })}
            <Divider />
            <div className="flex justify-between">
              <Button
                color="#1F1F1F"
                radius="md"
                onClick={() => {
                  clearCart();
                  setMessage(
                    `Thank you for adopting ${cartQuantity} doggo(s)!`,
                  );
                }}
              >
                Adopt {cartQuantity} doggo(s)
              </Button>
              <Button
                color="#1F1F1F"
                radius="md"
                onClick={() => {
                  clearCart();
                  setMessage("You have not rescued a doggo yet 😞");
                }}
              >
                Remove all
              </Button>
            </div>
          </div>
        ) : (
          <p className="mt-5 text-center">{message}</p>
        )}
      </div>
    </div>
  );
};

export default CartItem;
