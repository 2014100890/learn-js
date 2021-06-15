{
  /*
    Enum : 관련된 상수 값을 한 번에 묶어서 사용
    js 지원 안함, ts 별도 타입 
  */

  // Javascript
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 })
  const dayOfToday = DAYS_ENUM.MONDAY

  // 값을 정하지 않으면 0부터 시작
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  console.log(Days.Monday) // 0
  console.log(Days.Tuesday) // 1
  console.log(Days.Wednesday) // 2

  // Typescript 사용 지양 type이 보장되지 않음
  let day: Days = Days.Wednesday
  day = Days.Tuesday
  day = 3
  // union type 대체
  type DaysofWeek = 'Monday' | 'Tuesday' | 'Wednedsday'

  let dayOfweek: DaysofWeek = 'Monday'
  dayOfweek = 'Wednedsday' // union type 내에서만 수정 가능함
}
