const configs = (function () {
	"use strict";

	// settings
	const showDoneTasks = true; // true or false
	const showTasksNumber = true; // true or false
	const crossTasksOnDone = false; // true or false
	const showCheckBox = true; // true or false

	// fonts
	const headerFontFamily = "Fredoka One"; // supports all google fonts - https://fonts.google.com/
	const bodyFontFamily = "Nunito"; // supports all google fonts - https://fonts.google.com/

	// scroll
	const pixelsPerSecond = 50; // must be a number
	const animationDelay = 5; // must be a number (seconds)
	const gapBetweenScrolls = 10; // must be a number

	// task list
	const taskListWidth = "690px"; // must have px at the end
	const taskListHeight = "70px"; // must have px at the end

	const taskListPadding = "0px"; // must have px at the end

	const taskListBackgroundColor = "#000"; // hex only
	const taskListBackgroundOpacity = 0.8; // must be between 0 and 1

	const taskListBorderColor = "white"; // hex or name
	const taskListBorderWidth = "0px"; // must have px at the end
	const taskListBorderRadius = "10px"; // must have px at the end

	// header
	const headerWidth = "480px"; // must have px at the end
	const headerHeight = "70px"; // must have px at the end
	const headerBackgroundColor = "#000"; // hex only
	const headerBackgroundOpacity = 0.9; // must be between 0 and 1

	const headerBorderColor = "white"; // hex or name
	const headerBorderWidth = "2px"; // must have px at the end
	const headerBorderRadius = "10px"; // must have px at the end

	const headerFontSize = "30px"; // must have px at the end
	const headerFontColor = "white"; // hex or name

	const headerPadding = "10px"; // must have px at the end
	const tasksNumberFontSize = "30px"; // must have px at the end

	// body
	const bodyBackgroundColor = "#ffffff"; // hex only
	const bodyBackgroundOpacity = 0; // must be between 0 and 1
	const bodyFontColor = "white"; // hex or name

	const bodyBorderColor = "white"; // hex or name
	const bodyBorderWidth = "0px"; // must have px at the end
	const bodyBorderRadius = "0px"; // must have px at the end

	const bodyVerticalPadding = "0px"; // must have px at the end

	// task (individual tasks)
	const usernameColor = "white"; // hex or name, "" for twitch username color
	const usernameMaxWidth = "200px"; // must have px at the end

	const taskBackgroundColor = "#000"; // hex only
	const taskBackgroundOpacity = 0; // must be between 0 and 1

	const taskFontSize = "25px"; // must have px at the end
	const taskFontColor = "white"; // hex or name

	const taskBorderColor = "black"; // hex or name
	const taskBorderWidth = "0px"; // must have px at the end
	const taskBorderRadius = "5px"; // must have px at the end

	const taskMarginRight = "10px"; // must have px at the end
	const taskPadding = "0px"; // must have px at the end

	// checkbox - if enabled
	const checkBoxSize = "20px"; // must have px at the end
	const checkBoxBackgroundColor = "#000"; // hex only
	const checkBoxBackgroundOpacity = 0; // must be between 0 and 1

	const checkBoxBorderColor = "white"; // hex or name
	const checkBoxBorderWidth = "1px"; // must have px at the end
	const checkBoxBorderRadius = "3px"; // must have px at the end

	const checkBoxMarginTop = "2px"; // must have px at the end
	const checkBoxMarginLeft = "2px"; // must have px at the end
	const checkBoxMarginRight = "2px"; // must have px at the end

	const tickCharacter = "'✔'"; // any character, must be in single quotes
	const tickSize = "18px"; // must have px at the end
	const tickColor = "white"; // hex or name
	const tickTranslateY = "3px"; // must have px at the end

	// bullet point - if enabled
	const bulletPointCharacter = "•"; // any character
	const bulletPointSize = "15px"; // must have px at the end
	const bulletPointColor = "white"; // hex or name

	const bulletPointMarginTop = "0px"; // must have px at the end
	const bulletPointMarginLeft = "5px"; // must have px at the end
	const bulletPointMarginRight = "5px"; // must have px at the end

	// colon
	const colonMarginLeft = "2px"; // must have px at the end
	const colonMarginRight = "2px"; // must have px at the end

	// Add task commands - please add commands in the exact format
	const addTaskCommands = [
		"!taska",
		"!taskadd",
		"!atask",
		"!addtask",
		"!task",
		"!add",
		"!todo",
	];

	// Delete task commands - please add commands in the exact format
	const deleteTaskCommands = [
		"!taskd",
		"!taskdel",
		"!taskdelete",
		"!deltask",
		"!deletetask",
		"!taskr",
		"!taskremove",
		"!rtask",
		"!removetask",
		"!remove",
		"!delete",
	];

	// Edit task commands - please add commands in the exact format
	const editTaskCommands = [
		"!taske",
		"!taskedit",
		"!etask",
		"!edittask",
		"!edit",
	];

	// Finish task commands - please add commands in the exact format
	const finishTaskCommands = [
		"!taskf",
		"!taskfinish",
		"!ftask",
		"!finishtask",
		"!taskd",
		"!taskdone",
		"!donetask",
		"!dtask",
		"!finish",
		"!done",
		"!finished",
	];

	// Next task commands - please add commands in the exact format
	const nextTaskCommands = ["!next", "!nexttask"];

	// Check task commands - please add commands in the exact format
	const checkCommands = [
		"!taskc",
		"!taskcheck",
		"!ctask",
		"!checktask",
		"!mytask",
		"!check",
	];

	// Help commands - please add commands in the exact format
	const helpCommands = [
		"!taskh",
		"!taskhelp",
		"!htask",
		"!helptask",
		"!tasks",
	];

	// Admin delete - please add commands following the exact format
	const adminDeleteCommands = [
		"!taskadel",
		"!adel",
		"!adelete",
		"!admindelete",
	];

	// Admin clear done - please add commands following the exact format
	const adminClearDoneCommands = [
		"!acleardone",
		"!admincleardone",
		"!cleardone",
	];

	const adminClearAllCommands = [
		"!clearall",
		"!allclear",
		"!adminclearall",
		"!adminallclear",
		"!aclearall",
		"!aclear",
		"!clear",
	];

	// Responses
	const taskAdded = 'The task "{task}" has been added, {user}!';
	const noTaskAdded =
		"Good job on finishing the task '{oldTask}'! Now moving onto '{newTask}', {user}!";
	const taskNext =
		"Looks like you already have a task up there {user}, use !check to check your last task!";
	const noTaskContent = "Try using !add the-task-you-are-working-on {user}";
	const noTaskToEdit = "No task to edit {user}";
	const taskEdited = 'Task edited to "{task}" {user}';
	const taskDeleted = 'Task "{task}" has been deleted, {user}';
	const adminDeleteTasks = "All of the user's tasks have been deleted";
	const taskFinished = 'Good job on finishing "{task}" {user}!';
	const taskCheck = '{user} your current task is: "{task}"';
	const taskCheckUser = `{user} {user2}'s current task is: "{task}"`;
	const noTask = "Looks like you don't have a task up there {user}";
	const noTaskA = "Looks like there is no task from that user there {user}";
	const notMod = "Permission denied, {user}; Mods only";
	const clearedAll = "All tasks have been cleared";
	const clearedDone = "All finished tasks have been cleared";
	const help = `{user} Use the following commands to help you out - !task !remove !edit !done. For more commands, click here: https://github.com/liyunze-coding/Chat-Task-Tic-Overlay#commands`;

	const additionalCommands = {
		"!rythondev":
			"{user} Ryan is the creator of this bot, check out his Twitch at https://www.twitch.tv/rythondev",
	};

	const titles = ["!RythonDev", "!taskadd", "!taskdone", "!taskhelp"];

	// Other
	const styles = {
		headerFontFamily,
		bodyFontFamily,
		pixelsPerSecond,
		animationDelay,
		gapBetweenScrolls,
		taskListWidth,
		taskListHeight,
		taskListPadding,
		taskListBackgroundColor,
		taskListBackgroundOpacity,
		taskListBorderColor,
		taskListBorderWidth,
		taskListBorderRadius,
		headerFontColor,
		headerBorderColor,
		headerBorderWidth,
		headerBorderRadius,
		headerWidth,
		headerHeight,
		headerFontSize,
		headerBackgroundColor,
		headerBackgroundOpacity,
		headerPadding,
		tasksNumberFontSize,
		bodyBorderColor,
		bodyBorderWidth,
		bodyBorderRadius,
		bodyBackgroundColor,
		bodyBackgroundOpacity,
		bodyFontColor,
		bodyVerticalPadding,
		usernameColor,
		usernameMaxWidth,
		taskFontSize,
		taskFontColor,
		taskBackgroundColor,
		taskBackgroundOpacity,
		taskBorderRadius,
		taskBorderColor,
		taskBorderWidth,
		taskMarginRight,
		taskPadding,
		checkBoxSize,
		checkBoxBorderColor,
		checkBoxBorderRadius,
		checkBoxBorderWidth,
		checkBoxMarginTop,
		checkBoxMarginLeft,
		checkBoxMarginRight,
		checkBoxBackgroundColor,
		checkBoxBackgroundOpacity,
		tickCharacter,
		tickColor,
		tickSize,
		tickTranslateY,
		bulletPointCharacter,
		bulletPointColor,
		bulletPointSize,
		bulletPointMarginRight,
		bulletPointMarginLeft,
		bulletPointMarginTop,
		colonMarginRight,
		colonMarginLeft,
	};

	const commands = {
		addTaskCommands,
		deleteTaskCommands,
		editTaskCommands,
		finishTaskCommands,
		nextTaskCommands,
		helpCommands,
		checkCommands,
		adminDeleteCommands,
		adminClearDoneCommands,
		adminClearAllCommands,
		additionalCommands,
	};

	const responses = {
		taskAdded,
		taskNext,
		noTaskAdded,
		noTaskContent,
		taskDeleted,
		taskEdited,
		noTaskToEdit,
		taskFinished,
		taskCheck,
		taskCheckUser,
		noTask,
		noTaskA,
		notMod,
		help,
		adminDeleteTasks,
		clearedAll,
		clearedDone,
	};

	const settings = {
		showDoneTasks,
		showTasksNumber,
		crossTasksOnDone,
		showCheckBox,
	};

	let module = {
		styles,
		commands,
		responses,
		settings,
		titles,
	};

	return module;
})();
