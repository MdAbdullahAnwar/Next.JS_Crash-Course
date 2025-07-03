import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Salad</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/Images/food_1.png"
          alt="Salad 1"
          style={{
            border: "solid black 2px",
            borderRadius: "10px",
            margin: "10px",
          }}
          width={200}
          height={200}
        />
        <Image
          src="/Images/food_2.png"
          alt="Salad 2"
          style={{
            border: "solid black 2px",
            borderRadius: "10px",
            margin: "10px",
          }}
          width={200}
          height={200}
        />
        <Image
          src="/Images/food_3.png"
          alt="Salad 3"
          style={{
            border: "solid black 2px",
            borderRadius: "10px",
            margin: "10px",
          }}
          width={200}
          height={200}
        />
        <Image
          src="/Images/food_4.png"
          alt="Salad 4"
          style={{
            border: "solid black 2px",
            borderRadius: "10px",
            margin: "10px",
          }}
          width={200}
          height={200}
        />
      </div>
    </>
  );
}
