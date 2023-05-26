interface Props {
  text: string;
}

// function Message(prop: Props) {
//   // const name = "Chandralekha";
//   // if (name) return <p>Hii {name}</p>;
//   // return <p>Hii user</p>;
//   return <p>{prop.text}</p>;
// }

function Message({ text }: Props) {
  return <p>{text}</p>;
}

export default Message;
