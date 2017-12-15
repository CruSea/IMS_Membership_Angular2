
export class UserPaginator{
  public  current_page: number;
  public first_page_url: string;
  public from: number;
  public  last_page: number;
  public  last_page_url: string;
  public  next_page_url: string;
  public path: string;
  public per_page: number;
  public  prev_page_url: string;
  public to: number;
  public  total: number;
  public data: User[];

  constructor(){
    this.current_page = null;
    this.from = null;
    this.last_page = null;
    this.per_page = null;
    this.to = null;
    this.total = null;
    this.first_page_url = '';
    this.last_page_url = '';
    this.next_page_url = '';
    this.prev_page_url = '';
    this.path = '';

  }
}

export  class User {
  public  id: number;
  public fullname: string;
  public  username: string;
  public  email: string;
  public  password: string;
  public  phonenumber: number;
  public  role_id: number;
  public created_at: string;
  public updated_at: string;
  constructor(){
    this.fullname = '';
    this.username = '';
    this.email = '';
    this.password = '';
    this.role_id = null;
    this.created_at = '';
    this.updated_at = '';


  }
}
