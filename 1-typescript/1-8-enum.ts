{
  /*
        Enum : js 지원 안함, ts 별도 타입 
    */

  // Javascript
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 })
  console.log(DAYS_ENUM.MONDAY)

  // Typescript 사용 지양 type이 보장되지 않음
  // union type 대체
  type DaysofWeek = 'Monday' | 'Tuesday' | 'Wednedsday'

  enum Days {
    Monday,
    Tuesday,
    Wednesday,
  }

  console.log(Days.Monday) // 0
  console.log(Days.Tuesday) // 1
  console.log(Days.Wednesday) // 2
  let day: Days = Days.Wednesday
  day = Days.Tuesday
  day = 3
}
