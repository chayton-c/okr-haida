export interface SalesTarget {
  id: string;
  shopName: string;
  salesTarget: number;
  sales: number;
  executorId: string;
  executorName: string;
  hide: number;
  addTime?: Date;
  updateTime?: Date;
}
