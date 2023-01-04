const column = [
  {
    Header: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Email",
    accessor: "email",
  },
];

export const GROUPED_COLUMN = [
  {
    Header: "Name",
    columns: [
      { Header: "First Name", accessor: "first_name" },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Other details",
    columns: [
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Email",
        accessor: "email",
      },
    ],
  },
];
export default column;
