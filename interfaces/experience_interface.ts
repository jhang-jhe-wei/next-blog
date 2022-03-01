export interface ListItemProps {
  title: string;
  subTitle: string;
  started_at: string;
  ended_at: string;
  highlights: string[];
}

export interface AchievementItemProps {
  title: string;
  is_full: boolean;
  highlights: string[];
}

export interface ListProps {
  category: string;
  backgroundText: string;
  data: ListItemProps[];
}


export interface AchievementProps {
  data: AchievementItemProps[];
}
