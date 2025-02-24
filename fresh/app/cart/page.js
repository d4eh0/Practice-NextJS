import Hello from './data.js'

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem/>
      <CartItem/>
      <Hello/>
    </div>
  )
} 

function CartItem(){ // 컴포넌트 만들기
  return (
  <div className="cart-item">
    <p>상품</p>
    <p>$40</p>
    <p>1개</p>
  </div>
  )
}