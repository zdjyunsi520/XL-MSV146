var status = -1;
var possibleJobs = new Array();
var jobA = false;
var warper = false;
var job;
var newJob;
var chosenMap = -1;
var chosenSection = -1;

function start() {
    cm.sendSimple("嘿，最近怎么样？我在这边过得还不错。");
}

function action(mode, type, selection) {
    status++;
    if(mode != 1){
        cm.dispose();
        return;
    }
    if (!jobA && !warper)
        if (selection == 1)
            jobA = true;
        else
            warper = true;
    if (jobA)
        jobAdv(selection);
    else
        return;
}

function jobAdv(selection){
    if (status == 0) {
        newJob = cm.getJobId() + 1;
        if (cm.getJobId() % 10 == 2) {
            cm.sendOk("恭喜你达到了等级");
            cm.dispose();
        } else if (cm.getJobId() % 10 >= 0 && cm.getJobId() % 100 != 0) {
            var secondJob = cm.getJobId() % 10 == 0;
            if ((secondJob && cm.getLevel() < 70) || (!secondJob && cm.getLevel() < 120)) {
                cm.sendOk("恭喜你达到了等级");
                cm.dispose();
            } else
                cm.sendYesNo("。你想成为一名#b " + cm.getLevel() + "以下是你可选择的职业#b"+cm.getJobName(newJob)+"#k ?");
        } else {
            if (cm.getJobId() % 1000 == 0) {
                if (cm.getLevel() >= 10) 
                    for (var i = 1; i < 6; i++) 
                        possibleJobs.push(cm.getJobId() + 100 * i);
                else if (cm.getLevel() >= 8)
                    possibleJobs.push(200);
            } else if (cm.getLevel() >= 30) {
                switch (cm.getJobId()) {
                    case 100:
                    case 200:
                        possibleJobs.push(cm.getJobId() + 30);
                    case 300:
                    case 400:
                    case 500:
                    case 501:
                        possibleJobs.push(cm.getJobId() + 20);
                    case 1100:
                    case 1200:
                    case 1300:
                    case 1400:
                    case 1500:
                    case 2100:
                    case 2300:
                    case 2400:
                    case 3100:
                    case 3200:
                    case 3300:
                        possibleJobs.push(cm.getJobId() + 10);
                        break;
                }
            }
            if (possibleJobs.length == 0) {
                cm.sendOk("恭喜你达到了等级");
                cm.dispose();
            } else {
                var text = "你确定要转职吗？";
                for (var j = 0; j < possibleJobs.length; j++)
                    text += "\r\n#L"+j+"#"+cm.getJobName(possibleJobs[j])+"#l";
                cm.sendSimple(text);
            }
        }
    } else if (status == 1 && cm.getJobId() % 100 != 0) {
        cm.changeJobById(cm.getJobId() + 1);
        cm.maxMastery();
        cm.dispose();
    } else if (status == 1) {
        cm.changeJobById(possibleJobs[selection]);
        if (cm.getJobId() % 100 == 0)
            cm.dispose();
    } else if (status == 2) {
        job = selection;
        cm.sendYesNo("你确定要转职吗？");
    } else if (status == 3) {
        cm.changeJobById(possibleJobs[job]);
        cm.dispose();
    }
}