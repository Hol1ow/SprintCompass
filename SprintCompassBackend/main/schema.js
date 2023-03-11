const schema = `
type Query {
    getallusers : [User],
    getuser(UniqueID: String) : User,
    getallprojects : [Project],
    getproject_users(Project_id: String) : [Project_User],
}

type Mutation {
    adduser(
        UniqueID: String
        AccountID: String
        Password: String
        FirstName: String
        LastName: String
        BirthDate: String
        PhoneNumber: String
    ): User

    addproject(
        ProjectName: String
        Stacks: String
        NumOfSprints: Int
        Description: String
    ): Project

    addproject_user(
        Project_id: String
        User_id: String
    ): Project_User

    deleteproject_user(
        _id: String
    ): String
},

type User {
    _id: String
    UniqueID: String
    AccountID: String
    Password: String
    FirstName: String
    LastName: String
    BirthDate: String
    PhoneNumber: String
}

type Project {
    _id: String
    ProjectName: String
    Stacks: String
    NumOfSprints: String
    Description: String
}

type Project_User {
    _id: String
    Project_id: String
    User_id: String
}
  
`;
export { schema };