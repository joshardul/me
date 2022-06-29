// Build experiences section
for ( let i = 0; i < experiences.length; i++ )
{
    // Get current experience
    var experience = experiences[i];
    
    // Create the link for the experience and add it to the list
    var link = experience_link;
    link = link.replace( "%id%", experience.id );
    link = link.replace( "%link_text%", experience.link_text );
    $( "#experience-nav" ).prepend( link );
    // Set up the mobile version (a select to display only one experience)
    var option = experience_option
    option = option.replace( "%id%", experience.id );
    option = option.replaceAll( "%link_text%", experience.link_text );
    $( "#experience-mobile-nav" ).prepend( option );
    
    // Create the card for the experience
    var card = experience_card;
    card = card.replace( "%id%", experience.id );
    card = card.replace( "%name%", experience.name );
    card = card.replace( "%location%", experience.location );
    var dates = "";
    if ( experience.start_date == experience.end_date )
    {
        dates = experience.start_date;
    }
    else if ( experience.end_date == "" )
    {
        dates = experience.start_date + " - present";
    }
    else
    {
        dates = experience.start_date + " - " + experience.end_date;
    }
    card = card.replace( "%dates%", dates );
    card = card.replace( "%position%", experience.position );
    // Create the description list
    var description = "";
    for ( let j = 0; j < experience.description.length; j++ )
    {
        description += "<li>" + experience.description[j] + "</li>"
    }
    card = card.replace( "%description%", description );
    
    // Prepend the experience card to the experiences
    $( "#experience-cards" ).prepend( card );
    // Mobile card
    card = card.replace( "uk-card uk-card-default",
                         "uk-card uk-card-default " + experience.id + "-mobile-card hide" )
    card = card.replace( " id=\"" + experience.id + "\"", "" )
    $( "#experience-mobile-cards" ).prepend( card );
}

// Code to implement mobile navigation of experiences
// Adapted from: 
// https://stackoverflow.com/questions/6164507/change-the-content-of-a-div-based-on-selection-from-dropdown-menu/24849350
change_func = function()
{
    var target = $( this ).data( "target" );
    var show = $( "option:selected", this ).data( "show" );
    $( target ).children().addClass( "hide" );
    $( show ).removeClass( "hide" );
}
$( document ).on( "change", ".experience-mobile-nav", change_func );
trig_func = function()
{
    $( ".experience-mobile-nav" ).trigger( "change" );
}
$( document ).ready( trig_func );

// Add seeking position message if seeking position
if ( seeking_position )
{
    $( "#seeking-position-msg" ).prepend( seeking_position_msg );
}

// Build education section
for ( let i = 0; i < schools.length; i++ )
{
    // Get the current school
    var school = schools[i];
    
    // Create the section for the school
    var section = school_section;
    section = section.replace( "%logo_alt%", school.logo.alt );
    section = section.replace( "%logo%", school.logo.name );
    section = section.replace( "%logo_dimensions%", school.logo.dimensions );
    section = section.replace( "%name%", school.name );
    section = section.replace( "%degree%", school.degree );
    section = section.replace( "%location%", school.location );
    section = section.replace( "%grad_year%", school.grad_year );
    section = section.replace( "%gpa%", school.gpa );
    // Create additional details list
    var additional_details = "";
    for ( let j = 0; j < school.details.length; j++ )
    {
        additional_details += school.details[j];
        if ( j < school.details.length - 1 )
        {
            additional_details += "<br>";
        }
    }
    section = section.replace( "%additional_details%", additional_details );
    section = section.replace( "%catalog%", school.catalog );
    section = section.replaceAll( "%id%", school.id );
    
    // Create the modal for the school
    var modal = school_modal;
    modal = modal.replaceAll( "%id%", school.id );
    modal = modal.replace( "%abbreviation%" , school.abbreviation );
    modal = modal.replace( "%catalog%" , school.catalog );
    
    // Prepend the school section and modal to the schools
    $( "#schools" ).prepend( section + modal );
    
    // Create courses description list (done after adding the school so list can
    // be appended to the HTML element with the id)
    for ( let j = 0; j < school.courses.length; j++ )
    {
        // Get the current course
        var course = school.courses[j];
        
        // Create the block for the course
        var block = course_block;
        block = block.replace( "%name%", course.name );
        block = block.replace( "%code%", course.code );
        block = block.replace( "%date_taken%", course.date_taken );
        block = block.replace( "%description%", course.description );
        
        // Append the course to the notable courses modal
        var modal_block = course_modal_block;
        modal_block = modal_block.replace( "%course_block%", block );
        $( "#" + school.id + "-notable-list" ).append( modal_block );
        
        // If one of the first three courses, append it to top three section
        if ( j < 3 )
        {
            $( "#" + school.id + "-top-three" ).append( block );
        }
    }
}

// Build projects section
for ( let i = 0; i < projects.length; i++ )
{
    // Get the current project
    var project = projects[i];
    
    // Create the card for the project
    var card = project_card;
    card = card.replace( "%name%", project.name );
    card = card.replace( "%dates%",
                         ( project.start_date == project.end_date ) ?
                         project.start_date : project.start_date + "–" + project.end_date );
    // Create the list of icon links for the project
    var icons = "";
    for ( let j = 0; j < project.links.length; j++ )
    {
        // Get the current link
        var link = project.links[j];
        
        // Create the icon link for the link
        var icon_link = project_icon;
        icon_link = icon_link.replace( "%icon%", link.icon );
        icon_link = icon_link.replace( "%link%", link.link );
        icon_link = icon_link.replace( "%title%", link.title );
        
        // Add the icon link to list of icons
        icons += icon_link;
        // If not last icon link, add a bullet
        if ( j != project.links.length - 1 )
        {
            icons += " • ";
        }
    }
    card = card.replace( "%icons%", icons );
    card = card.replace( "%slider_width%", project.slider_width );
    card = card.replace( "%id%", project.id );
    card = card.replace( "%description%", project.description );
    // Create the list of tags for the project
    var tags = "";
    for ( let j = 0; j < project.tags.length; j++ )
    {
        // Get the current tag
        var tag = project.tags[j];
        
        // Create the label for the tag
        var tag_label = project_tag;
        tag_label = tag_label.replace( "%name%", tag );
        
        // Add the icon link to list of icons
        tags += tag_label;
        // If not last icon link, add a space
        if ( j != project.tags.length - 1 )
        {
            tags += " ";
        }
    }
    card = card.replace( "%tags%", tags );
    
    // If last project card and even number of project cards, add
    // questions card as extra to last project card (else replace
    // %extra% with empty string)
    if ( i == projects.length - 1 && projects.length % 2 == 0 )
    {
        card = card.replace( "%extra%", questions_card );
    }
    else
    {
        card = card.replace( "%extra%", "" );
    }
    
    // Prepend the project card to the project cards grid
    $( "#project-cards" ).append( card );
    
    // Add the images to the project card slider
    for ( let j = 0; j < project.images.length; j++ )
    {
        // Get the current image
        var image = project.images[j];
        
        // Create a slider item for the image
        var slider_item = project_slider_item;
        slider_item = slider_item.replace( "%alt%", image.alt );
        slider_item = slider_item.replace( "%folder%", project.id );
        slider_item = slider_item.replace( "%name%", image.name );
        
        // Add image to project card slider
        $( "#" + project.id + "-slider" ).append( slider_item );
    }
}
// If odd number of project cards, questions card was not already added
// in the loop, so add here
if ( projects.length % 2 != 0 )
{
    $( "#project-cards" ).append( "<div class=\"uk-width-1-2@m\">"
                                  + questions_card + "</div>" );
}

// Build skills section
for ( let i = 0; i < skill_types.length; i++ )
{
    // Get the current skill type
    var skill_type = skill_types[i];
    
    // Create the filter control
    var filter_control = type_filter_control;
    filter_control = filter_control.replace( "%filter%", skill_type.filter );
    filter_control = filter_control.replace( "%name%", skill_type.name );
    
    // Append the filter control to list of filter controls
    $("#skill-filter-controls").append(filter_control);
    
    // Add skills chips
    for ( let j = 0; j < skill_type.skills.length; j++ )
    {
        // Get the current skill
        var skill = skill_type.skills[j];
        
        // Create the skill chip
        var chip = skill_chip;
        chip = chip.replace( "%type%", skill_type.filter );
        chip = chip.replace( "%text-color%", skill_type.text_color );
        chip = chip.replace( "%skill%", skill );
        
        // Add the skill chip to the list of skill chips
        $( "#skill-chips" ).append( chip );
    }
}

// Build activities section
for ( let i = 0; i < activities.length; i++ )
{
    // Get the current school
    var activity = activities[i];
    
    // Create the section for the school
    var accordion_item = activity_accordion_item;
    // If first course, set class to uk-open, else add nothing
    accordion_item = accordion_item.replace( "%class%", ( i == 0 ) ? "uk-open" : "" );
    accordion_item = accordion_item.replace( "%organization%", activity.organization );
    // If there is a sub-title, add it, else add nothing
    accordion_item = accordion_item.replace( "%sub_title%",
                                             ( activity.sub_title != "" )
                                             ? " (" + activity.sub_title + ")"
                                             : activity.sub_title );
    accordion_item = accordion_item.replace( "%description%", activity.description );
    accordion_item = accordion_item.replaceAll( "%id%", activity.id );
    
    // Append the activity accordion item to the activities accordion
    $( "#activities-accordion" ).append( accordion_item );
    
    // Create positions list (done after adding the activity so list can be appended to the HTML element with the id)
    for ( let j = 0; j < activity.positions.length; j++ )
    {
        // Get the current course
        var position = activity.positions[j];
        
        // Create the block for the course
        var row = activity_position_row;
        row = row.replace( "%title%", position.title );
        var dates = "";
        if ( position.start_date == position.end_date )
        {
            dates = position.start_date;
        }
        else if ( position.end_date == "" )
        {
            dates = position.start_date + " - present";
        }
        else
        {
            dates = position.start_date + " - " + position.end_date;
        }
        row = row.replace( "%dates%", dates );
        
        // Append the position to the positions table
        $( "#" + activity.id + "-positions-table" ).append( row );
    }
}

// Build honors/awards section
for ( let i = 0; i < honors.length; i++ )
{
    // Get the current honor
    var honor = honors[i];
    
    // Create the row for the table
    var row = honor_row;
    row = row.replace( "%title%", honor.title );
    var levels = "" + honor.levels;
    levels = levels.replaceAll( ",", ", " );
    row = row.replace( "%levels%", levels );
    var dates = "" + honor.dates;
    dates = dates.replaceAll( ",", ", " );
    row = row.replace( "%dates%", dates );
    
    // Add the row to the honors table
    $( "#honors-table" ).prepend( row );
}