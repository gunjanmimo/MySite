var skills = {
  ht: 75,
  jq: 25,
  sk: 90,
  ph: 75,
  il: 90,
  in: 85,
  fl: 75,
};

$.each(skills, function (key, value) {
  var skillbar = $("." + key);

  skillbar.animate(
    {
      width: value + "%",
    },
    3000,
    function () {
      $(".speech-bubble").fadeIn();
    }
  );
});

// http://gitgraphjs.com/

var myTemplateConfig = {
  colors: ["#008fb5", "#979797", "#f1c109", "#33cc33"],
  branch: {
    lineWidth: 3,
    spacingX: 30,
    labelRotation: 0,
  },
  commit: {
    spacingY: 40,
    dot: {
      size: 10,
    },
    message: {
      displayAuthor: false,
      displayBranch: true,
      displayHash: true,
      font: "normal 14pt Arial",
    },
  },
};
var myTemplate = new GitGraph.Template(myTemplateConfig);

var graph = new GitGraph({
  template: "metro", // or blackarrow
  orientation: "vertical",
  author: "Username",
  elementId: "graph",
  mode: "extended", // or compact if you don't want the messages
  template: myTemplate,
});

var master = graph.branch("master");
master.commit({ message: "Initial Commit" });
master.commit("Add README").commit("Add tests").commit("Implement feature");
var develop = graph.branch("develop");
develop.commit("cool");
var newFeature = graph.branch("munich-re-change-1");
var jiraticket1 = graph.branch("Jira-1");
jiraticket1.commit("Implement Ticket 1 in Epic");
jiraticket1.commit("Created new changes");
var jiraticket3 = graph.branch("Jira-3");
jiraticket3.commit("new changes");
jiraticket1.commit("Fix tests");
jiraticket1.merge(newFeature, "merged");
var jiraticket2 = graph.branch("Jira-2");
jiraticket2.commit("Implement Ticket 2 in Epic");
jiraticket2.commit("Created new changes");
jiraticket2.commit("Fix tests");
jiraticket3.merge(newFeature, "merged");
newFeature.merge(develop, "merged");
develop.merge(master, "merged");
jiraticket2.merge(newFeature, "merged");

// Merge `newFeature` into `master`
newFeature.merge(develop, "Release new version");
develop.merge(master, "merged");
