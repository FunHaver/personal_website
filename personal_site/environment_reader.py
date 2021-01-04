def get_env(file_dir):
    env_vars = {}
    with open(file_dir) as f:
        count = 0
        for line in f:
            count += 1
            if line.startswith('#') or not line.strip():
                continue

            else:
                key, value = line.strip().split('=', 1)
                env_vars[key] = value
    return env_vars