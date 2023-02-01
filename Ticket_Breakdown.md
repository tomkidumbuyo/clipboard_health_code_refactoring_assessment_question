# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## Ticket 1
Add FacilityAgentId to Agents
### Summary
When a facility is creating an Agent an Id is automatically created by the system instead of allowing the the Facility to use their own AgentID
### Acceptance Criteria
- Facility Should be able add `FacilityAgentId` when creating and updating Agents
- The ID should be unique in that Facility

### Story Points: 5
### Notes
- Create a migration that adds a column in the Agents table called FacilityAgentId
- This migration should add the current AgentId as the default value.
- Add an ID field in Create Agent form that is to be saved to FacilityAgentId
- Add an ID field in Update Agent form that is to be saved to FacilityAgentId

## Ticket 2
Replace AgentId with FacilityAgentId when generating reports and displaying data for the Facility
### Summary
When getting reports and displaying Agent metadata, we can still see the agents system generated ID instead of the FacilityAddedID
### Acceptance Criteria
- the Agent id should be replaced by the `FacilityAgentId` when displaying agents Metadata.
- the replacement should also appear when generating reports (PDF Reports).
### Story Points: 1
### Notes
- Assuming that there is a repository that handles delivering data from the database. Replacing the agentId with facilityAgentId will provide a quick fix. 
- The problem with this approach is for all the times your use this Id to perform queries since the FacilityAgentId is only unique to the Facility and can be duplicate in different facilities.
- Th other approach is to change the value in `getShiftsByFacility` and `generateReport` to make this switch.