export const app_name = import.meta.env.APP_NAME;
export const LANGUAGES = [
  { label: 'English', value: 'en-US' },
  { label: '简体中文', value: 'zh-CN' }
];
export const studied_course_categories = [
  { label: 'University Math (e.g., Calculus)', value: 'University Math' },
  { label: 'Programming (e.g., Python)', value: 'Programming' },
  { label: 'STEM (e.g., Biology, Physics, Chemistry)', value: 'STEM' },
  { label: 'None of The Above', value: 'None' }
];

export const main_countries_or_regions = [
  { label: 'United States', value: 'US' },
  { label: 'United Kingdom', value: 'UK' },
  { label: 'Hong Kong', value: 'HK' },
  { label: 'Singapore', value: 'SG' },
  { label: 'Macau', value: 'MO' },
  { label: 'Australia', value: 'AU' }
  // { label: 'Other Countries', value: 'Countries except for the above' },
];

export const OLD_LANGUAGE_MAPPING = { 'zh-CN': 'cn', 'en-US': 'en' };
export const CHAT_STATUS_LIST = [
  'done',
  'understanding',
  'searching',
  'retrieving',
  'assesing',
  'analyzing',
  'nothing',
  'processing',
  'thinking'
];
export const RESUME_ACCEPT = '.pdf,.docx';

export const GRADUATION_APIS = {
  graduate: {
    get_all_recommend_results: 'apply7_get_all_recommend_results',
    stream_recommend_reports: 'apply7_stream_recommend_hot_programs',
    stream_recommend_report: 'apply7_stream_recommend_program_detail',
    get_user_collects: 'graduate_get_user_collects',
    add_reports_to_user_collect: 'graduate_add_reports_to_user_collect',
    delete_user_college: 'graduate_delete_user_collect'
  },
  undergraduate: {
    get_all_recommend_results: 'get_all_recommend_college_results',
    stream_recommend_reports: 'stream_recommend_colleges',
    stream_recommend_report: 'stream_recommend_college_detail',
    get_user_collects: 'undergraduate_get_user_collects',
    add_reports_to_user_collect: 'undergraduate_add_reports_to_user_collect',
    delete_user_college: 'undergraduate_delete_user_collect'
  }
};

export const ENGLISH_EXAM_TYPES = ['ielts', 'toefl', 'pte', 'duolingo_english_test', 'duolingo', 'gre', 'gmat'];

export enum LocalStorageKeys {
  USER_ID = 'userId',
  EMAIL = 'email',
  MOBILE = 'mobile',
  JWT_TOKEN = 'jwtToken',
  TMP_RESUME = 'tmpResume',
  IMPERSONATE_USER_ID = 'impersonateUserId',
  LANGUAGE = 'language',
  SHOW_LEFT_BAR = 'showLeftMenu',
  GENERAL_COUNSELOR_SHOWED = 'generalCounselorShowed',
  ONBOARDING = 'onboarding',
  HEARTBEAT_INTERVAL = 'heartbeatInterval'
}

export const isDev =
  location.host.includes('localhost') || location.host.includes('127.0.0.1') || location.host.includes('dev.apply7.ai');
