import { IProfile } from "../profile.model";

export interface ListProfileResponse {
  /**
   * Profile list
   */
  data: IProfile[];
  /**
   * Total data count
   */
  totalCount: number;
  /**
   * Current page number
   */
  page: number;
}
