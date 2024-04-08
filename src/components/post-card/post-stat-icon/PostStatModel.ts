import {
  SvgIconComponent,
  DoneAll as DoneAllIcon,
  DescriptionOutlined as DescriptionIcon,
  BookmarkBorderOutlined as BookmarkIcon,
} from "@mui/icons-material";

export class PostStatModel {
  static readonly DOUBLE_CHECK = new PostStatModel(
    "DOUBLE_CHECK",
    "Double Check",
    DoneAllIcon,
  );
  static readonly RESOURCES = new PostStatModel(
    "RESOURCES",
    "Resources",
    DescriptionIcon,
  );
  static readonly BOOKMARK = new PostStatModel(
    "BOOKMARK",
    "Bookmark",
    BookmarkIcon,
  );

  key!: string;
  text!: string;
  icon!: SvgIconComponent;

  constructor(key: string, text: string, icon: SvgIconComponent) {
    this.key = key;
    this.text = text;
    this.icon = icon;
  }
}
