function createStructureOfApplyDialog(offersData, idx) {
    return `
       <div class="exit"><img src="images/exit.png" alt="exit icon" id="exit"></div>
        <h1 class="job-title">${offersData[idx].name}</h1>
        <div class="basic-info">
            <span class="days">
                <img src="images/calendar-icon.png" alt="calendar icon"> ${offersData[idx]?.daysOfWork}
            </span>
            <span class="location">
                <img src="images/location-icon.png" alt="location icon"> ${offersData[idx]?.place}
            </span>
            <span class="people">
                <img src="images/people-icon.png" alt="people icon"> ${offersData[idx]?.salary}
            </span>
        </div>  
    
        <div class="fill-data-section">
            <span>Fill out the information below</span>
    
            <form action="" method="post" class="apply-form">
                <label for="full-name-input" class="grey bold">Full name <span class="star">*</span></label>
                <input type="text" name="full-name-input" id="full-name-input" placeholder="Enter full name">
    
                <label for="email-input" class="grey bold">Email address <span class="star">*</span></label>
                <input type="email" name="email-input" id="email-input" placeholder="Enter email address">
    
                <label for="phone-number-input" class="grey bold">Phone number <span class="star">*</span></label>
                <input type="tel" name="phone-number-input" id="phone-number-input" placeholder="Enter phone number">
    
                <label for="cv-upload" class="grey bold">Upload CV <span class="star">*</span></label>
                <input type="file" name="cv-upload" id="cv-upload">
    
                <label for="linkedin" class="grey bold">LinkedIn profile</label>
                <input type="url" name="linkedin" id="linkedin" placeholder="Enter LinkedIn profile link">
    
                <label for="portfolio" class="grey bold">Portfolio link</label>
                <input type="url" name="portfolio" id="portfolio" placeholder="Enter portfolio link">
    
                <label for="cover-letter" class="grey bold">Cover letter</label>
                <textarea name="cover-letter" id="cover-letter" placeholder="Write a short cover letter"></textarea>
    
                <button type="submit" class="apply-submit">Apply now</button>
            </form>
        </div>
    `;
}


export default createStructureOfApplyDialog;