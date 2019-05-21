export default class Utils {
    static DateToCron(date: Date, repeatPlan: string): string {
        let cron = '';
        switch(repeatPlan) {
            case 'daily': {
                cron += '0 ';
                cron += date.getMinutes() + ' ';
                cron += date.getHours() + ' ';
                cron += '* ';
                cron += '* ';
                cron += '? ';
                cron += date.getFullYear() + '/1';
            }
            case 'weekly': {
                cron += '0 ';
                cron += date.getMinutes() + ' ';
                cron += date.getHours() + ' ';
                cron += '? ';
                cron += '* ';
                cron += (date.getDay() + 1) + '/7 ';
                cron += date.getFullYear() + '/1';
            }
            case 'monthly': {
                cron += '0 ';
                cron += date.getMinutes() + ' ';
                cron += date.getHours() + ' ';
                cron += date.getDate() + ' ';
                cron += '* ';
                cron += '? ';
                cron += date.getFullYear() + '/1';
            }
            case 'yearly': {
                cron += '0 ';
                cron += date.getMinutes() + ' ';
                cron += date.getHours() + ' ';
                cron += date.getDate() + ' ';
                cron += date.getMonth() + ' ';
                cron += '? ';
                cron += date.getFullYear() + '/1';
            }
        }
        return cron;
    }
}