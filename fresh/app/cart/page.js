import Hello from './data.js'

export default function Cart() {
  let 장바구니 = ['Tomatoes', 'Pasta']
  // 부모에 하는 이유 : 자식에 하면 실행이 많아지므로.
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem item={장바구니[0]} />
      <CartItem item={장바구니[1]}/>
      <CartBtn color="green" />
    </div>
  )
} 

function CartBtn(props) {
  return (
    <div>
      <button style={{ background :props.color }}>o</button>
    </div>
  )
}

function CartItem(props) { // 컴포넌트 만들기
  return (
  <div className="cart-item">
    <p>{props.item}</p>
    <p>$40</p>
    <p>1개</p>
  </div>
  )
}