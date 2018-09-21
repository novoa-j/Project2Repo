export class IssueInter {
    ID: number;
    Name: string;
    Accuracy: number;
    Icd: string;
    IcdName: string;
    ProfName: string;
    Ranking: number;
}

let arrayOfObj = [IssueInter, SpecialisationEntry];

export class Diagnosis {
    [
        Issue: IssueInter,
        Specialisation: SpecialisationEntry[]
    ]
}

export class SpecialisationEntry {
    ID: number;
    Name: string;
    SpecialistID: number;
}




