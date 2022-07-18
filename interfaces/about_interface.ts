export interface ListItemProps {
  title: string;
  subTitle?: string;
  startedAt?: string;
  endedAt?: string;
  highlights?: string[];
}

export interface ListProps {
  category: string;
  backgroundText?: string;
  id?: string;
  data: ListItemProps[];
  styleName?: string;
}

export interface AchievementProps {
  title: string;
  isFull: boolean;
  highlights: string[];
}

export interface AchievementsProps {
  data: AchievementProps[];
}

export interface SkillProps {
  name: string;
  proficiency: number;
}

export interface SkillsProps {
  title: string;
  skills: SkillProps[];
}

export interface SkillsListProps {
  data: SkillsProps[];
}


