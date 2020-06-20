// Build experiences section
for (let i = 0; i < experiences.length; i++)
{
    // Get current experience
    var experience = experiences[i];
    
    // Create the link for the experience and add it to the list
    var link = experience_link;
    link = link.replace("%id%", experience.id);
    link = link.replace("%link_text%", experience.link_text);
    $("#experience-nav").prepend(link);
    
    // Create the card for the experience
    var card = experience_card;
    card = card.replace("%id%", experience.id);
    card = card.replace("%name%", experience.name);
    card = card.replace("%location%", experience.location);
    var dates = "";
    if (experience.start_date == experience.end_date)
    {
        dates = experience.start_date;
    }
    else if (experience.end_date == "")
    {
        dates = experience.start_date + " - present";
    }
    else
    {
        dates = experience.start_date + " - " + experience.end_date;
    }
    card = card.replace("%dates%", dates);
    card = card.replace("%position%", experience.position);
    // Create the description list
    var description = "";
    for (let j = 0; j < experience.description.length; j++)
    {
        description += "<li>" + experience.description[j] + "</li>"
    }
    card = card.replace("%description%", description);
    
    // Prepend the experience card to the experiences
    $("#experience-cards").prepend(card);
}


// Build education section
for (let i = 0; i < schools.length; i++)
{
    // Get the current school
    var school = schools[i];
    
    // Create the section for the school
    var section = school_section;
    section = section.replace("%logo_alt%", school.logo.alt);
    section = section.replace("%logo%", school.logo.name);
    section = section.replace("%logo_dimensions%", school.logo.dimensions);
    section = section.replace("%name%", school.name);
    section = section.replace("%degree%", school.degree);
    section = section.replace("%location%", school.location);
    section = section.replace("%grad_year%", school.grad_year);
    section = section.replace("%gpa%", school.gpa);
    // Create additional details list
    var additional_details = "";
    for (let j = 0; j < school.details.length; j++)
    {
        additional_details += school.details[j];
        if (j < school.details.length - 1)
        {
            additional_details += "<br>";
        }
    }
    section = section.replace("%additional_details%", additional_details);
    section = section.replace("%catalog%", school.catalog);
    section = section.replaceAll("%id%", school.id);
    
    // Create the modal for the school
    var modal = school_modal;
    modal = modal.replaceAll("%id%", school.id);
    modal = modal.replace("%abbreviation%", school.abbreviation);
    modal = modal.replace("%catalog%", school.catalog);
    
    // Prepend the school section and modal to the schools
    $("#schools").prepend(section + modal);
    
    // Create courses description list (done after added the school so it can be appended to the HTML element with the id)
    for (let j = 0; j < school.courses.length; j++)
    {
        // Get the current course
        var course = school.courses[j];
        
        // Create the block for the course
        var block = course_block;
        block = block.replace("%name%", course.name);
        block = block.replace("%code%", course.code);
        block = block.replace("%date_taken%", course.date_taken);
        block = block.replace("%description%", course.description);
        
        // Append the course to the notable courses modal
        var modal_block = course_modal_block;
        modal_block = modal_block.replace("%course_block%", block);
        $("#" + school.id + "-notable-list").append(modal_block);
        
        // If one of the first three courses, append it to top three section
        if (j < 3)
        {
            $("#" + school.id + "-top-three").append(block);
        }
    }
}

// TODO: Build projects section

// Build skills section
for (let i = 0; i < skill_types.length; i++)
{
    // Get the current skill type
    var skill_type = skill_types[i];
    
    // Create the filter control
    var filter_control = type_filter_control;
    filter_control = filter_control.replace("%filter%", skill_type.filter);
    filter_control = filter_control.replace("%name%", skill_type.name);
    
    // Append the filter control to list of filter controls
    $("#skill-filter-controls").append(filter_control);
    
    // Add skills chips
    for (let j = 0; j < skill_type.skills.length; j++)
    {
        // Get the current skill
        var skill = skill_type.skills[j];
        
        // Create the skill chip
        var chip = skill_chip;
        chip = chip.replace("%type%", skill_type.filter);
        chip = chip.replace("%skill%", skill);
        
        // Add the skill chip to the list of skill chips
        $("#skill-chips").append(chip);
    }
}

// TODO: Build activities section

// TODO: Build honors/awards section