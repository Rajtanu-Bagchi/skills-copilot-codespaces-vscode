function skillsMember() {
    return {
        name: 'skillsMember',
        templateUrl: 'app/components/skills-member/skills-member.html',
        controller: skillsMemberController,
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}