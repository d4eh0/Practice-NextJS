'use client'
import { useState } from "react"

export default function List() {
  let item = ["Tomatoes", "Pasta", "Coconut"];
  let [수량, 수량변경] = useState([0, 0, 0])
  return (
    <div>
      <h3 className="title">상품목록</h3>
      {
       item.map((a, i) => { // map함수를 이용한 html 반복
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{a} $40</h4>
            <button onClick={()=> { 
              let copy = [...수량]
              copy[i]--
              수량변경(copy) }}>-</button>
            <span> {수량[i]} </span>
            <button onClick={()=> { 
              let copy = [...수량]
              copy[i]++
              수량변경(copy) }}>+</button>
          </div>
        )
       })
      }
    </div>
  )
}
