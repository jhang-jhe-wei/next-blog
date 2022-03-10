export interface ListItemProps {
  title: string;
  subTitle: string;
  started_at: string;
  ended_at: string;
  highlights: string[];
}

export interface ListProps {
  category: string;
  backgroundText: string;
  id: string;
  data: ListItemProps[];
}

export interface AchievementProps {
  title: string;
  is_full: boolean;
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


