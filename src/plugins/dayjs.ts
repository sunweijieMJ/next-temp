import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';

// 使用插件
dayjs.extend(RelativeTime);

dayjs.locale('zh-CN');
