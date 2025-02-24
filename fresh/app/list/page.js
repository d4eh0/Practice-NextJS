export default function List() {
  let item = ["Tomatoes", "Pasta", "Coconut"];
  return (
    <div>
      <h3 className="title">상품목록</h3>
      {
       item.map((a, i) => { // map함수를 이용한 html 반복
        return (
          <div className="food" key={i}> // key추가 권장
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{a} $40</h4>
          </div>
        )
       })
      }
    </div>
  )
}
