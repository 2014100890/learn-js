{
  /**
   * Intersection Types : &
   */
  type Student = {
    name: string
    score: number
  }

  type Worker = {
    employeeId: number
    work: () => void
  }

  function internWork(person: Student & Worker) {
    console.log(person.name, person.work())
  }

  internWork({
    name: 'elie',
    score: 1,
    employeeId: 123,
    work: () => {},
  })
}
