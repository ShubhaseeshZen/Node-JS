export interface employee {
  id: number;
  empname: string;
  empage: number;
  department: string;
  address: { country: string; location: [] };
  salary: number;
}
