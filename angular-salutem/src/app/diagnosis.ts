export class Diagnosis {
    Issue: {
      ID: number;
      Name: string;
      Accuracy: number;
      Icd: string;
      IcdName: string;
      ProfName: string;
      Ranking: number;
    }
    Specialisation: [
        {
            ID: number;
            Name: string;
            SpecialistID: number;
        }
    ]
}

// export class Spec {
//     ID: number;
//     Name: string;
//     SpecialistID: number;
// }




